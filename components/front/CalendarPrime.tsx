import React, { useContext, useEffect, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { useViewport } from 'use-viewport';
import { dumpVars } from '../../lib/debug';
import ContainerComponent from './Container';
import { addLocale } from 'primereact/api';
import { ApiContext } from '../../api/api';
import dayjs from 'dayjs';
import { dayjsToShortDate, formatPrice, formatPrice2, mapFromAPIDateTime } from '../../lib/formaters';
import { DayInfo } from '../../api/micrositeApi.v1';

interface ComponentProps {}

addLocale('cs', {
  firstDayOfWeek: 1,
  dayNames: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  dayNamesShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  dayNamesMin: ['N', 'P', 'U', 'S', 'Č', 'P', 'S'],
  monthNames: [
    'leden',
    'únor',
    'březen',
    'duben',
    'květen',
    'červen',
    'červenec',
    'srpen',
    'září',
    'říjen',
    'listopad',
    'prosinec',
  ],
  monthNamesShort: ['led', 'ún', 'bře', 'dub', 'kvě', 'čer', 'čvn', 'srp', 'zář', 'říj', 'lis', 'pro'],
  today: 'dnes',
  clear: 'Smazat',
});

const CalendarPrime: React.FC<ComponentProps> = () => {
  const { width } = useViewport();
  const [range, setRange] = useState(null);
  const { getResourceCalendarInfo } = useContext(ApiContext);
  const [viewDate, setViewDate] = useState(new Date());
  const [dayInfos, setDayInfos] = useState<DayInfo[]>([]);
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    getResourceCalendarInfo(
      'cf7e153d-9f1b-11ec-b75a-960000dc55d4',
      dayjs(viewDate).startOf('month').format('YYYY-MM-DD'),
      dayjs(viewDate).endOf('month').format('YYYY-MM-DD'),
      (d) => {
        setDayInfos(d);
        setDisabledDates(d.filter((t) => t.occupied).map((t) => new Date(t.date)));
      },
    );
  }, [viewDate]);

  return (
    <ContainerComponent id={'kalendar'}>
      <>
        <h2>Kalendář</h2>
        <CalendarInner>
          <Calendar
            disabledDates={disabledDates}
            locale={'cs'}
            selectionMode={'range'}
            selectOtherMonths={true}
            value={range}
            onSelect={(e) => setRange(e.value)}
            inline={true}
            numberOfMonths={1}
            minDate={new Date()}
            showOtherMonths={false}
            onViewDateChange={(e) => {
              if (dayjs().diff(dayjs(e.value), 'month') <= 0) {
                setDayInfos([]);
                setViewDate(e.value);
              }
            }}
            viewDate={viewDate}
            dateTemplate={(e) => (
              <div>
                <div>{e.day}</div>
                <CalendarPrice>{formatPrice2(dayInfos[e.day - 1]?.price, '')}</CalendarPrice>
              </div>
            )}
          />
        </CalendarInner>
      </>
    </ContainerComponent>
  );
};

const CalendarPrice = styled.b`
  font-size: smaller;
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
    height: 55px;
    width: 45px;
    font-size: 0.7rem;

    b {
      font-size: 0.6rem;
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
