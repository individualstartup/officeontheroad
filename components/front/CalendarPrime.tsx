import React, { useContext, useEffect, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { useViewport } from 'use-viewport';

interface ComponentProps {}

const CalendarPrime: React.FC<ComponentProps> = () => {
  const { width } = useViewport();
  const [range, setRange] = useState<Date | Date[]>();
  return (
    <>
      <CalendarInner>
        <Calendar
          selectionMode={'range'}
          value={range}
          onSelect={(e) => setRange(e.value)}
          inline={true}
          numberOfMonths={width > 600 ? 2 : 1}
          dateTemplate={(e) => <div>{e.day}</div>}
        />
      </CalendarInner>
    </>
  );
};

const CalendarInner = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0px 35px 0px;
`;

export default CalendarPrime;
