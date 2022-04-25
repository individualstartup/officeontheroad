import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';
import {ComputePriceOutDTO} from "../../../api/micrositeApi.v1";
import {isNotNullOrUndefined, isNullOrUndefined} from "../../../lib/utils";
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import {formatPrice} from "../../../lib/formaters";
import RegistrationForm from "../RegistrationForm";
import ThanksDialog from "../ThanksDialog";
import dayjs from "dayjs";

interface ComponentProps {
}

interface ReservationRange {
    since: Date;
    till: Date;
}

const ReservationForm: React.FC<ComponentProps> = () => {
    const {computePrice} = useContext(ApiContext);
    const [apiResponse, setApiResponse] = useState<ComputePriceOutDTO>();
    const [form, setForm] = useState<ReservationRange>({since: null, till: null});
    const [validationError, setValidationError] = useState<string>();
    const resourceId = 'cf7e153d-9f1b-11ec-b75a-960000dc55d4';
    const [visibleOrder, setVisibleOrder] = useState(false);
    const [visibleThanksDialog, setVisibleThanksDialog] = useState(false);

    useEffect(() => {
        if (isValid(form)) {
            setValidationError(null);
            setApiResponse(null);
            computePrice(
                resourceId,
                dayjs(form.since).format(`YYYY-MM-DD`),
                dayjs(form.till).format(`YYYY-MM-DD`),
                (d) => {
                    setApiResponse(d);
                },
                null,
                {
                    onValidationFailed: (originalResponse) => {
                        console.log(JSON.stringify(originalResponse));
                        setValidationError(originalResponse.map((t) => t.message).join(', '));
                    },
                },
            );
        }
    }, [form]);

    const isValid = (f: ReservationRange) => {
        if (isNotNullOrUndefined(f.since) && isNotNullOrUndefined(f.till)) return true;
        return false;
    };

    return (
        <>
            <BookingFormInner>
                <Heading>S elektrokoly, nebo bez ...</Heading>
                <Note>Zarezervujte si termín ještě dnes</Note>
                <BookingForm>
                    <TwoCols>
                        <Col>
                            <DateForm>
                                <DateFrom>
                                    <LabelWithIcon>
                                        <CalendarIcon src={'/icons/datepicker.svg'}></CalendarIcon>
                                        <Label>Odjezd</Label>
                                    </LabelWithIcon>
                                    {/* <InputText style={{ width: '100%' }} />*/}
                                    <Calendar
                                        style={{minWidth: '110px'}}
                                        dateFormat={'dd.mm.yy'}
                                        value={form.since}
                                        onChange={(e) => setForm((f) => ({...f, since: e.target.value as Date}))}
                                    />
                                </DateFrom>
                                <DateTo>
                                    <LabelWithIcon>
                                        <CalendarIcon src={'/icons/datepicker.svg'}></CalendarIcon>
                                        <Label>Příjezd</Label>
                                    </LabelWithIcon>
                                    {/*<InputText style={{ width: '100%' }} />*/}
                                    <Calendar
                                        style={{minWidth: '110px'}}
                                        dateFormat={'dd.mm.yy'}
                                        value={form.till}
                                        onChange={(e) => setForm((f) => ({...f, till: e.target.value as Date}))}
                                    />
                                </DateTo>
                            </DateForm>
                            {/*               {apiResponse?.totalPrice && (
                  <PriceNote>
                    {apiResponse.prices.map((t) => `${t.amount} x ${formatPrice(t.price, 'Kc')}`).join(', ')}
                  </PriceNote>
                )}*/}
                            {validationError && <Error>{validationError}</Error>}
                        </Col>
                        <Col>
                            <ButtonAndPrice>
                                <Button
                                    label={'Rezervovat'}
                                    disabled={isNullOrUndefined(apiResponse)}
                                    onClick={(e) => setVisibleOrder(true)}
                                ></Button>
                                {apiResponse?.totalPrice &&
                                    <Price>{formatPrice(apiResponse?.totalPrice, 'Kč')}</Price>}
                            </ButtonAndPrice>
                        </Col>
                    </TwoCols>
                </BookingForm>
            </BookingFormInner>
            {apiResponse && (
                <RegistrationForm
                    visible={visibleOrder}
                    data={apiResponse}
                    onHide={() => {
                        setVisibleOrder(false);
                    }}
                    onComplete={() => {
                        setVisibleOrder(false);
                        setVisibleThanksDialog(true);
                    }}
                />
            )}
            <ThanksDialog
                visible={visibleThanksDialog}
                onHide={() => {
                    setVisibleThanksDialog(false);
                    setForm({since: null, till: null});
                    setApiResponse(null);
                }}
            />
        </>
    );
}


const Error = styled.div`
  display: flex;
  color: red;
  font-size: 0.75rem;
  padding: 0;
  margin: 0;
`;

const DateFrom = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
const DateTo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
const DateForm = styled.div`
  display: flex;
  gap: 0.3rem;
`;
const PriceNote = styled.div`
  display: flex;

  span {
    margin-right: 0.3rem;
  }
`;

const ButtonAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.84rem;
  padding: 1rem;
  @media (max-width: 800px) {
    padding: 0;
  }

  button {
    color: white;
    background: #1a84a1;
    border-radius: 4px;
  }

  button:hover {
    color: white;
    background: #1a84a1;
    border-radius: 4px;
  }
`;

const Price = styled.div`
  display: flex;
  color: #1aa138;
  justify-content: center;
`;
const CalendarIcon = styled.img`
  display: flex;
`;

const Label = styled.div`
  display: flex;
`;

const LabelWithIcon = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const Col = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const Note = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
`;

const BookingForm = styled.div`
  display: flex;
  background: #fafafa;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
`;

const BookingFormInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (max-width: 800px) {
    margin-top: 0px;
    padding: 0 1rem 2rem 1rem;
  }
`;

const Heading = styled.div`
  font-family: Roboto, sans-serif;
  color: rgba(0, 11, 27, 0.66);
  font-weight: 500;
  font-size: 25px;
  line-height: 40px;
`;

const TwoCols = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default ReservationForm;
