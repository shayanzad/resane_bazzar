import React from "react";
import { Tag } from "../../uiKit";
import { StyledContainer } from "./style";
import sample1 from "../../../assets/images/samples/sample1.png";

function Samples(props) {
  return (
    <StyledContainer>
      <div className="title">
        <h2>درباره ما</h2>
      </div>
      <div className="container">
        <p>
        منطقه ۲ شهرداری تهران یکی از مناطق شهری تهران است که در شمال شرقی میدان آزادی، از غرب تا شمال غرب تهران ادامه دارد. این منطقه در محدوده میانی و شمالی شهر تهران قرار دارد.[۲] با مناطق یک، سه، پنج، شش، نُه، ده همجوار است. محدوده جغرافیایی آن از شمال به ارتفاعات البرز، از جنوب به خیابان آزادی، از شرق به بزرگراه شهید چمران و خیابان توحید و از غرب به بزرگراه اشرفی اصفهانی و محمدعلی جناح قرار دارد.[۲] برخی محله‌های منطقهٔ ۲ شامل عبارتند از پونک، تهران ویلا، شهرآرا، گیشا، مرزداران، شهرک غرب و سعادت آباد می‌شود. منطقه ۲ دارای ۱۴ محله و ۹ ناحیه می‌باشد.
        </p>
      </div>
    </StyledContainer>
  );
}

export default Samples;
