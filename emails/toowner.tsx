import { Html, Heading, Button, Head, Section, Text, Hr } from '@react-email/components';
import { EmailProps } from './type';

const OwnerEmail = (props: EmailProps) => {
  return (
    <Html lang="jp" dir="ltr">
      <Section>
        <Text>{props.name} 様 よりお問い合わせがありました。</Text>
        <Text>以下お問い合わせ内容の確認です。</Text>
      </Section>
      <Hr className="m-[16px] border-t-2 border-[#cccccc]" />
      <Heading as="h2">お問い合わせ内容</Heading>
      <Section>件名：{props.title}</Section>
      <Section>{props.message}</Section>
      <Hr className="m-[16px] border-t-2 border-[#cccccc]" />
    </Html>
  );
};

export default OwnerEmail;
