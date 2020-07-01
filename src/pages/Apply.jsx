import React from "react";
import Parser from "html-react-parser";
import styled from "styled-components";
import { SubHeader } from "../components";

export function Apply() {
  return (
    <Wrapper>
      <SubHeader>Be a Junior Developer Today</SubHeader>
      {Parser(
        `<div class="typeform-widget" data-url="https://form.typeform.com/to/lWblM7mI" style="width: 80%; margin:0 auto; height: 600px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=Db3ILl&utm_source=typeform.com-01D8JWXT18NNVF1Z0D5GYH1SSM-free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>`
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 8rem auto;

  h2 {
    text-align: center;
  }
`;
