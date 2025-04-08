import { Html, Heading, Button, Head, Section, Text, Hr } from '@react-email/components';
import { EmailProps } from './type';

const ClientEmail = (props: EmailProps) => {
  return (
    <Html lang="jp" dir="ltr">
      <Section>
        <Text>{props.name} 様</Text>
        <Text>お問い合わせくださりありがとうございます。</Text>
        <Text>こちらのメールは自動で送信されています。</Text>
        <Text>以下お問い合わせ内容の確認です。</Text>
      </Section>
      <Hr className="m-[16px] border-t-2 border-[#cccccc]" />
      <Heading as="h2">お問い合わせ内容：</Heading>
      <Section>件名：{props.title}</Section>
      <Section>{props.message}</Section>
      <Hr className="m-[16px] border-t-2 border-[#cccccc]" />
      <Section>
        <Text>お問い合わせ内容に関して修正等がある場合はこちらのメールに返信してください。</Text>
        <Text>返信には時間がかかる場合があります。あらかじめご了承ください。</Text>
      </Section>
      <Hr className="m-[16px] border-t-2 border-[#cccccc]" />
      <Section>
        <Text>clowntetra.jp 管理者 吉髙 僚眞</Text>
      </Section>
    </Html>
  );
};

export default ClientEmail;
