import { EmailProps } from './type';

const SendDiscordMessage = async (props: EmailProps) => {
  const url = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || '';
  console.log(url);
  const data = {
    content:
      '## お問い合わせがありました。\n お名前:' +
      props.name +
      '\n メールアドレス:' +
      props.email +
      '\n 件名:' +
      props.title +
      '\n 内容: \n' +
      props.message +
      '\n',
  };
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export default SendDiscordMessage;
