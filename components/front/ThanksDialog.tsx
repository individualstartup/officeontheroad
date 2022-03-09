import * as yup from 'yup';
import styled from 'styled-components';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import React, { useContext } from 'react';
import { ComputePriceOutDTO } from '../../api/micrositeApi.v1';
import { dayjsToShortDate, formatPrice, mapFromAPIDateTime } from '../../lib/formaters';
import { useForm } from 'react-hook-form';
import { useFormik } from 'formik';
import { ApiContext } from '../../api/api';

interface ComponentProps {
  visible: boolean;
  onHide: () => void;
}

const ThanksDialog: React.FC<ComponentProps> = ({ onHide, visible }) => {
  return (
    <>
      <Dialog onHide={() => onHide()} visible={visible} blockScroll={true}>
        <DialogInner>
          <Heading>Děkujeme za rezervaci!</Heading>
          <Paragraph>Vaše rezervace se zpracovává a v mailu máte rekapitulaci.</Paragraph>
          <Icon src={'/icons/motorhome.svg'}></Icon>
          <Button label={'Zavřít'} onClick={(e) => onHide()} />
        </DialogInner>
      </Dialog>
    </>
  );
};

const Heading = styled.h1`
  display: flex;
  font-size: 21px;
  text-align: center;
`;

const Paragraph = styled.div`
  display: flex;
  padding: 2rem;
  text-align: center;
`;

const Icon = styled.img`
  margin: 2rem;
`;

const DialogInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 296px;
`;

const Row = styled.div`
  display: flex;
  font-size: 1.3125rem;
`;
export default ThanksDialog;
