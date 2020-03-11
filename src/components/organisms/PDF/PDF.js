import React, { memo } from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
  Image,
  Document
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import Button from "../../atoms/Button/Button";
import styled from "@react-pdf/styled-components";

const ZdjecieA4 = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Zdjecie = styled(Image)`
  width: 100px;
  height: 100px;
`;

const StyledPage = styled(Page)`
  position: relative;
`;

const Ramka = styled(View)`
  position: absolute;
  bottom: 93px;
  right: 93px;
`;

const PDF = ({ ...props }) => {
  return (
    <>
      <Document>
        {props.kategoria_ofert.name === "Social Media" ? (
          <StyledPage size="A4">
            <Text>Strona dla Social Media</Text>
          </StyledPage>
        ) : null}
        {props.kategoria_ofert.name === "SEO" ? (
          <StyledPage size="A4">
            <Text>Strona dla SEO</Text>
          </StyledPage>
        ) : null}
        <StyledPage size="A4">
          <Text>Oferta personalizowana dla: {props.ofe_nazwa}</Text>
          <Text>Oferta ważna do: {props.ofe_wazna}</Text>
          <Text>Kategoria: {props.kategoria_ofert.name}</Text>
        </StyledPage>
        <Page>
          <View>
            <ZdjecieA4
              src={
                "https://roxart-offer-dev.roxapps.usermd.net/uploads/bab66f10172a40899728236e6d6713b0.png"
              }
            />
          </View>
        </Page>
        <StyledPage>
          <ZdjecieA4
            src={
              "https://roxart-offer-dev.roxapps.usermd.net/uploads/e3a1a8e6b6784e10a1ae84058ebb63c8.png"
            }
          />
          <Ramka>
            <Zdjecie
              src={
                "https://roxart-offer-dev.roxapps.usermd.net" +
                props.user.image.url
              }
            />
            <Text>{props.user.username}</Text>
            <Text>{props.user.email}</Text>
            <Text>{props.user.phone}</Text>
          </Ramka>
        </StyledPage>
      </Document>
    </>
  );
};

export default PDF;

// const DownloadPDF = ({ ...props }) => (
//   <PDFDownloadLink
//     document={<PDF {...props} />}
//     fileName={"oferta-" + props.ofe_nazwa + ".pdf"}>
//     <Button small>Pobierz ofertę: {props.ofe_nazwa}</Button>
//   </PDFDownloadLink>
// );

// const ViewPDF = ({ ...props }) => (
//   <PDFViewer>
//     <PDF {...props} />
//   </PDFViewer>
// );

export const generatePDF = async documentData => {
  const blob = await pdf(<PDF {...documentData} />).toBlob();
  saveAs(blob, documentData.ofe_nazwa + "_oferta.pdf");
};

// export const PDFLink = memo(DownloadPDF, (prevProps, newProps) => {
//   //compare props and if no change, return true, else false
// });

// export const PDFView = memo(ViewPDF, (prevProps, newProps) => {
//   //compare props and if no change, return true, else false
// });
