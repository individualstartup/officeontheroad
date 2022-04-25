import * as yup from 'yup';
import styled from 'styled-components';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import React, {useContext} from 'react';
import {ComputePriceOutDTO} from '../../api/micrositeApi.v1';
import {dayjsToShortDate, formatPrice, mapFromAPIDateTime} from '../../lib/formaters';
import {useForm} from 'react-hook-form';
import {useFormik} from 'formik';
import {ApiContext} from '../../api/api';

interface ComponentProps {
    visible: boolean;
    onHide: () => void;
    data: ComputePriceOutDTO;
    onComplete: () => void;
}

interface FormData {
    fullName: string;
    phone: string;
    email: string;
    acceptTaC: boolean;
}

const initialValues: FormData = {
    fullName: '',
    phone: '',
    email: '',
    acceptTaC: false,
};

const validationSchema = yup.object().shape({
    fullName: yup.string().required('Vyplňte, prosím, jméno a příjmení'),
    phone: yup.string().required('Vyplňte prosím telefon'),
    email: yup.string().required('Vyplňte prosím e-mail').email('Vyplňte prosím e-mail'),
    acceptTaC: yup.mixed().test('true', 'Musíte souhlasit s obchodními podmínkami', (value, context) => {
        return value;
    }) /*.required('Musíte souhlasit s obchodními podmínkami'),*/,
});

const RegistrationForm: React.FC<ComponentProps> = ({onHide, visible, data, onComplete}) => {
    const {createResourceReservation} = useContext(ApiContext);
    const resourceId = 'cf7e153d-9f1b-11ec-b75a-960000dc55d4';

    const sinceDayjs = mapFromAPIDateTime(data.since);
    const tillDayjs = mapFromAPIDateTime(data.till);
    const days = tillDayjs.diff(sinceDayjs, 'days') - 1;

    const formik = useFormik<FormData>({
        validationSchema,
        initialValues,
        onSubmit: (values) => {
            createReservation(values);
        },
    });

    const createReservation = (res: FormData) => {
        createResourceReservation(
            {
                contract: {
                    contractTill: data.till,
                    contractSince: data.since,
                    resources: [{resourceUUID: resourceId, guestsCount: 1}]
                },
                email: res.email,
                phone: res.phone,
                fullName: res.fullName,
                totalPrice: data.totalPrice,
            },
            () => {
                onComplete();
            },
        );
    };

    return (
        <>
            <Dialog
                onHide={() => onHide()}
                visible={visible}
                header={(props) => <Row>Závazná objednávka termínu</Row>}
                blockScroll={true}
            >
                <DialogInner>
                    <form onSubmit={formik.handleSubmit}>
                        <TwoRows>
                            <Col>
                                <InputLabel>Datum odjezdu</InputLabel>
                                <Date>{dayjsToShortDate(mapFromAPIDateTime(data.since))}</Date>
                            </Col>
                            <ArrowRow>
                                <Arrow src={'/icons/datepicker-arrow.svg'}></Arrow>
                            </ArrowRow>
                            <Col>
                                <InputLabel>Datum návratu</InputLabel>
                                <Date>{dayjsToShortDate(mapFromAPIDateTime(data.till))}</Date>
                            </Col>
                        </TwoRows>
                        <Note>(jízda na {days} nocí)</Note>
                        <InnerForm>
                            <InputWrapper>
                                <InputLabel>jméno a příjmení: *</InputLabel>
                                <InputText
                                    value={formik.values.fullName}
                                    onChange={(e) => formik.setFieldValue('fullName', e.target.value)}
                                />
                                {formik.touched.fullName && <Error>{formik.errors.fullName}</Error>}
                            </InputWrapper>
                            <InputWrapper>
                                <InputLabel>email: *</InputLabel>
                                <InputText
                                    value={formik.values.email}
                                    onChange={(e) => formik.setFieldValue('email', e.target.value)}
                                />
                                {formik.touched.email && <Error>{formik.errors.email}</Error>}
                            </InputWrapper>
                            <InputWrapper>
                                <InputLabel>telefon: *</InputLabel>
                                <InputText
                                    value={formik.values.phone}
                                    onChange={(e) => formik.setFieldValue('phone', e.target.value)}
                                />
                                {formik.touched.phone && <Error>{formik.errors.phone}</Error>}
                            </InputWrapper>
                            <CheckboxWrapper>
                                <Checkbox
                                    checked={formik.values.acceptTaC}
                                    onChange={(e) => formik.setFieldValue('acceptTaC', e.target.checked)}
                                />
                                <ChecboxLabel>
                                    <a href="/data/obchodni-podminky.pdf" target={'_new'}>
                                        Souhlasím s obchodními podmínkami
                                    </a>
                                </ChecboxLabel>
                            </CheckboxWrapper>
                            {formik.touched.acceptTaC && <Error>{formik.errors.acceptTaC}</Error>}
                            <CenteredRow>
                                <Price>Cena celkem {formatPrice(data.totalPrice, 'Kč')}</Price>
                                <Button label={'Rezervovat'} type={'submit'}></Button>
                            </CenteredRow>
                        </InnerForm>
                    </form>
                </DialogInner>
            </Dialog>
        </>
    );
};

const Error = styled.div`
  display: flex;
  color: red;
  font-size: 0.95rem;
  padding: 0.3rem 0;
`;

const ChecboxLabel = styled.b`
  display: flex;
  font-size: small;
`;
const Price = styled.div`
  display: flex;
  color: #1aa138;
  font-size: 1.2rem;
  line-height: 16px;
  margin: 2rem 0;
`;

const CenteredRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 0.6rem;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.5rem;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const DialogInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Note = styled.div`
  margin: 0.3rem 0;
  display: flex;
  color: #959595;
  font-size: 14px;
  line-height: 16px;
`;

const ArrowRow = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 2;
`;

const Date = styled.div`
  display: flex;
  color: #1e2022;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin: 0.1rem 0;
`;
const InputLabel = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-transform: lowercase;
  margin: 0.7rem 0;

  color: #959595;
`;
const Arrow = styled.img`
  display: inline-block;
  margin-bottom: 8px;
`;

const Col = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const TwoRows = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;
`;

const Row = styled.div`
  display: flex;
  font-size: 1.3125rem;
`;
export default RegistrationForm;
