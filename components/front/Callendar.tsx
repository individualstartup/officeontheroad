import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { dumpVars } from '../../lib/debug';

interface ComponentProps {}

const CallendarComponent: React.FC<ComponentProps> = () => {
  const [calendarOffset, setCalendarOffset] = useState(0);

  return (
    <>
      <Callendar>
        <h2>
          <b>Kalendář</b>
        </h2>
        {dumpVars({ calendarOffset })}
        <CallendarInner>
          <ul className="pagination">
            <li>
              <a onClick={(e) => setCalendarOffset((o) => o - 1)}></a>
            </li>
            <li>
              <a onClick={(e) => setCalendarOffset((o) => o + 1)}></a>
            </li>
          </ul>
          <div className="month">
            <table>
              <caption>Srpen 2021</caption>
              <thead>
                <tr>
                  <th>Po</th>
                  <th>Út</th>
                  <th>St</th>
                  <th>Čt</th>
                  <th>Pá</th>
                  <th>So</th>
                  <th>Ne</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="passed">1</td>
                </tr>
                <tr>
                  <td className="passed">2</td>
                  <td className="passed">3</td>
                  <td className="passed">4</td>
                  <td className="passed">5</td>
                  <td className="passed">6</td>
                  <td className="today">
                    <a href="">
                      7<br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      8<br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="periodstart">
                    <a href="">
                      9<br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="period">
                    <a href="">
                      10
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="period">
                    <a href="">
                      11
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="periodend">
                    <a href="">
                      12
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      13
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      14
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      15
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">
                      16
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      17
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="unavailable">18</td>
                  <td className="unavailable">19</td>
                  <td className="unavailable">20</td>
                  <td className="unavailable">21</td>
                  <td className="unavailable">22</td>
                </tr>
                <tr>
                  <td className="unavailable">23</td>
                  <td className="unavailable">24</td>
                  <td>
                    <a href="">
                      25
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      26
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      27
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      28
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      29
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">
                      30
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      31
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*<div className="month">
            <table>
              <caption>Září 2021</caption>
              <thead>
                <tr>
                  <th>Po</th>
                  <th>Út</th>
                  <th>St</th>
                  <th>Čt</th>
                  <th>Pá</th>
                  <th>So</th>
                  <th>Ne</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="passed">1</td>
                </tr>
                <tr>
                  <td className="passed">2</td>
                  <td className="passed">3</td>
                  <td className="passed">4</td>
                  <td className="passed">5</td>
                  <td className="passed">6</td>
                  <td className="today">
                    <a href="">
                      7<br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      8<br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="periodstart">
                    <a href="">
                      9<br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="period">
                    <a href="">
                      10
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="period">
                    <a href="">
                      11
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="periodend">
                    <a href="">
                      12
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      13
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      14
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      15
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">
                      16
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      17
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td className="unavailable">18</td>
                  <td className="unavailable">19</td>
                  <td className="unavailable">20</td>
                  <td className="unavailable">21</td>
                  <td className="unavailable">22</td>
                </tr>
                <tr>
                  <td className="unavailable">23</td>
                  <td className="unavailable">24</td>
                  <td>
                    <a href="">
                      25
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      26
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      27
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      28
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      29
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">
                      30
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      31
                      <br />
                      <b>1.500 Kč</b>
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>*/}
        </CallendarInner>
      </Callendar>
    </>
  );
};
const CallendarInner = styled.div`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  div.month:nth-of-type(1) {
    margin-right: 0.625rem;
  }
  div.month:nth-of-type(2) {
    margin-left: 0.625rem;
  }
  table {
    border-collapse: separate;
    border-spacing: 1px;
    table-layout: fixed;
  }
  table th {
    font-weight: 300;
    padding: 0.75rem 0 0.75rem 0;
  }
  table td {
    border-radius: 10px;
    box-sizing: border-box;
    font-weight: 400;
    height: 80px;
    line-height: 25px;
    padding: 21px 1px 10px 1px;
    text-align: center;
    vertical-align: top;
    width: 80px;
  }
  table a {
    color: rgb(51, 51, 51);
    display: block;
    text-decoration: none;
  }
  table td.passed {
    background: rgb(239, 239, 239);
    color: rgb(194, 194, 194);
    text-decoration: line-through;
  }
  table td.today {
    border: 1px dashed rgb(194, 194, 194);
  }
  table td.periodstart {
    background: rgb(3, 131, 163);
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  table td.periodend {
    background: rgb(3, 131, 163);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  table td.period {
    background: rgb(94, 176, 197);
    border-radius: 0;
  }
  table td[class*='period'] a {
    color: rgb(255, 255, 255);
  }
  table td.unavailable {
    color: rgb(194, 194, 194);
    text-decoration: line-through;
  }
  table td b {
    font-size: 0.875rem;
  }

  ul.pagination {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 10px;
    position: absolute;
    width: 100%;
  }

  ul.pagination li {
    height: 10px;
    list-style: none;
    width: 8px;
  }

  ul.pagination a {
    display: block;
  }

  ul.pagination li:first-child a {
    border-bottom: 5px solid transparent;
    border-right: 10px solid rgb(3, 131, 163);
    border-top: 5px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: 0;
    width: 0;
    cursor: pointer;
  }

  ul.pagination li:last-child a {
    border-bottom: 5px solid transparent;
    border-left: 10px solid rgb(3, 131, 163);
    border-top: 5px solid transparent;
    content: '';
    height: 0;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    width: 0;
  }
`;

const Callendar = styled.div`
  padding-bottom: 4.5rem;
  padding-top: 5.75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 74.625rem;
`;

export default CallendarComponent;
