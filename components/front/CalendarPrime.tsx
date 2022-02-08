import React, { useContext, useEffect, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { useViewport } from 'use-viewport';
import { dumpVars } from '../../lib/debug';

interface ComponentProps {}

const CalendarPrime: React.FC<ComponentProps> = () => {
  const { width } = useViewport();
  const [range, setRange] = useState(null);
  return (
    <>
      {dumpVars(range)}
      <CalendarInner>
        <Calendar
          selectionMode={'range'}
          selectOtherMonths={true}
          value={range}
          onSelect={(e) => setRange(e.value)}
          inline={true}
          numberOfMonths={1}
          dateTemplate={(e) => (
            <div>
              <div>{e.day}</div>
              <CalendarPrice>1 500 Kc</CalendarPrice>
            </div>
          )}
        />
      </CalendarInner>
    </>
  );
};

const CalendarPrice = styled.b`
  font-size: 0.875rem;
`;
const CalendarInner = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0px 35px 0px;

  table.p-datepicker-calendar {
    width: 100%;
    border-collapse: separate;
    border-spacing: 1px;
    table-layout: fixed;
  }

  table.p-datepicker-calendar td span {
    border-radius: 10px;
    box-sizing: border-box;
    font-weight: 400;
    line-height: 25px;
    padding: 21px 1px 10px 1px;
    text-align: center;
    vertical-align: top;
    height: 65px;
    width: 65px;
    font-size: 0.7rem;
    b {
      font-size: 0.8rem;
    }
  }

  table.p-datepicker-calendar td span.p-disabled {
    color: rgb(194, 194, 194);
    text-decoration: line-through;
    background: rgb(239, 239, 239);
  }

  table.p-datepicker-calendar td span. p-highlight {
    color: red;
    text-decoration: line-through;
    background: rgb(239, 239, 239);
  }

  table.p-datepicker-calendar td.p-datepicker-today span {
    border: 1px dashed rgb(194, 194, 194);
    background-color: white;
  }
`;

export default CalendarPrime;
