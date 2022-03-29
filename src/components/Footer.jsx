import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div class="Footer">
      <table class="FooterTable">
          <tr>
            <td class="TextCol">
              <p1>credit to:  es</p1>
            </td>
            <td class="ImgCol" rowspan="3">
              <img class="FooterImg" src="../images/pawn.png"/>
            </td>
          </tr>
          <tr>
            <td>
              <p1>last updated: 3/23/2022</p1>
            </td>
          </tr>
          <tr>
            <td>
              <p1>contact me on draugiem.lv:  ValtersViesko</p1>
            </td>
          </tr>
        </table>
    </div>
  );
}

export default Footer;