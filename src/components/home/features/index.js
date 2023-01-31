import React from "react";
import { StyledContainer } from "./style";

import SecuritySvg from "../../svg/fetures/security";
import JobsSvg from "../../svg/fetures/jobs";
import QualitySvg from "../../svg/fetures/quality";
function Features(props) {
  return (
    <StyledContainer>
      <div>
        <QualitySvg />
        <p className="sub-text">کیفیت تضمین شده در انجام پروژه‌ها</p>
      </div>
      <div>
        <JobsSvg />
        <p className="sub-text">
          فرصت های شغلی به صورت فریلنسری در زمینه رسانه
        </p>
      </div>
      <div>
        {/* <img src={security} alt="security" /> */}
        <SecuritySvg />

        <p className="sub-text">امنیت کامل در پرداخت و دریافت هزینه‌ها</p>
      </div>
    </StyledContainer>
  );
}

export default Features;
