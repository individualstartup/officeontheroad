import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import HeroInformationBoxComponent from './HeroInformationBox';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { ApiContext } from '../../api/api';
import { ComputePriceOutDTO, ResponseResult } from '../../api/micrositeApi.v1';
import { dumpVars } from '../../lib/debug';
import { isNotNullOrUndefined, isNullOrUndefined } from '../../lib/utils';
import { Button } from 'primereact/button';
import RegistrationForm from './RegistrationForm';
import { formatPrice } from '../../lib/formaters';
import ThanksDialog from './ThanksDialog';

interface ComponentProps {
  backgroundImage: string;
}

interface ReservationRange {
  since: Date;
  till: Date;
}

const HeroComponent: React.FC<ComponentProps> = ({ backgroundImage }) => {
  const { computePrice } = useContext(ApiContext);
  const [apiResponse, setApiResponse] = useState<ComputePriceOutDTO>();
  const [form, setForm] = useState<ReservationRange>({ since: null, till: null });
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
        form.since.toISOString(),
        form.till.toISOString(),
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
      <TwoCols>
        <Hero backgroundImage={backgroundImage}></Hero>
        <BookingFormInner>
          <Heading>Na běžky, na lyže, nebo do termálů...</Heading>
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
                      style={{ minWidth: '110px' }}
                      dateFormat={'dd.mm.yy'}
                      value={form.since}
                      onChange={(e) => setForm((f) => ({ ...f, since: e.target.value as Date }))}
                    />
                  </DateFrom>
                  <DateTo>
                    <LabelWithIcon>
                      <CalendarIcon src={'/icons/datepicker.svg'}></CalendarIcon>
                      <Label>Příjezd</Label>
                    </LabelWithIcon>
                    {/*<InputText style={{ width: '100%' }} />*/}
                    <Calendar
                      style={{ minWidth: '110px' }}
                      dateFormat={'dd.mm.yy'}
                      value={form.till}
                      onChange={(e) => setForm((f) => ({ ...f, till: e.target.value as Date }))}
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
                  {apiResponse?.totalPrice && <Price>{formatPrice(apiResponse?.totalPrice, 'Kč')}</Price>}
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
            setForm({ since: null, till: null });
            setApiResponse(null);
          }}
        />
      </TwoCols>
    </>
  );
};

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

const Button2 = styled.a`
  display: flex;
  color: white;
  background: #1a84a1;
  border-radius: 4px;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  text-transform: uppercase;
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
  margin-top: 100px;
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

const Hero = styled.div`
  display: flex;
  background-image: ${({ backgroundImage }) => backgroundImage},
    linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 86%, rgba(255, 255, 255, 1) 100%);
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  width: 100%;
  position: relative;
  min-height: 433px;

  @media (max-width: 800px) {
    background-image: ${({ backgroundImage }) => backgroundImage};
    height: 420px;
  }

  /*  @media (max-width: 1024px) {
    margin-bottom: 260px;
  }

  @media (max-width: 800px) {
    margin-bottom: 320px;
  }

  @media (min-width: 1024px) {
    background-position: center top;
    margin: 0 auto 30px auto;
    min-height: 767px;
  }

  @media (min-width: 1440px) {
    min-height: 767px;
    margin: 0 auto 40px auto;
  }*/
`;

export default HeroComponent;
