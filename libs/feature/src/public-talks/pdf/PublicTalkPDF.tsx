import { Text, Document, View } from '@react-pdf/renderer';
import { PDFPage, PDFPageHeading, PDFDivider } from '@tool';
import { schedule } from './mockData';
import { publicTalkTitles } from '../publicTalkTitles';

const WeekView = ({ children }: any) => {
  return (
    <View
      style={{ borderBottom: '1px solid black', flex: 1, flexDirection: 'row' }}
    >
      {children}
    </View>
  );
};

const DateView = ({ meeting }: any) => {
  return (
    <View
      style={{
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        flex: 2,
        textAlign: 'right',
        paddingRight: 8,
        color: '#4a6da7',
      }}
    >
      <Text>
        {new Date(meeting.date).getDate() < 8 &&
          new Date(meeting.date).toLocaleString('default', {
            month: 'short',
          })}{' '}
        {new Date(meeting.date).getDate()}
      </Text>
    </View>
  );
};

const DetailsView = ({ children }: any) => {
  return <View style={{ flex: 20, flexDirection: 'column' }}>{children}</View>;
};

const ThemeView = ({ meeting }: any) => {
  return (
    <View style={{ flex: 1, fontFamily: 'Helvetica-Bold', fontSize: 14 }}>
      <Text>{publicTalkTitles[meeting.talkNumber - 1].title}</Text>
    </View>
  );
};

const Details2View = ({ children }: any) => {
  return <View style={{ flex: 3, flexDirection: 'row' }}>{children}</View>;
};

const HeadingView = ({ meeting }: any) => {
  return (
    <View style={{ flex: 1, textAlign: 'right', paddingRight: 5 }}>
      <Text>Speaker:</Text>
      <Text>Chairman:</Text>
      <Text>Reader:</Text>
    </View>
  );
};

const BrothersView = ({ meeting }: any) => {
  return (
    <View style={{ flex: 7 }}>
      <Text>{meeting.speaker}</Text>
      <Text>{meeting.chairman}</Text>
      <Text>{meeting.reader}</Text>
    </View>
  );
};

export const PublicTalkPDF = () => {
  return (
    <Document>
      <PDFPage>
        <PDFPageHeading>Weekend Meeting Schedule</PDFPageHeading>
        <PDFDivider height={3} color="#4a6da7"></PDFDivider>
        <View
          style={{ flexDirection: 'column', height: '250mm', fontSize: 12 }}
        >
          {schedule.map((meeting, index) => {
            return (
              <WeekView key={index}>
                <DateView meeting={meeting}></DateView>
                <DetailsView>
                  <ThemeView meeting={meeting}></ThemeView>
                  <Details2View>
                    <HeadingView></HeadingView>
                    <BrothersView meeting={meeting}></BrothersView>
                  </Details2View>
                </DetailsView>
              </WeekView>
            );
          })}
        </View>
      </PDFPage>
    </Document>
  );
};

export default PublicTalkPDF;
