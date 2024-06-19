import { EditOutlined, PoweroffOutlined, DeleteOutlined } from '@ant-design/icons';
import { useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { Card, Skeleton, Space, Typography, Form, Input, Button, Select, InputNumber } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import styles from './target.module.scss';

export interface Target {
  name: string;
  lastonline: string;
  daytable: string[];
  hourlimit: number;
  minutelimit: number;
  id: string;
}

const { Meta } = Card;

const popupParams = {
    message: 'Вы уверены?',
    buttons: [
        {
            id: '1',
            type: 'ok',
        },
        {
            id: '2',
            type: 'cancel',
        },
    ],
};

export const TargetCard: React.FC<{ target: Target }> = ({ target }) => {
    const showPopup = useShowPopup();
    const navigate = useNavigate();
    return (
        <>
            <Card
              style={{ width: '100%' }}
              actions={[
                  <DeleteOutlined
                    key="delete"
                    onClick={() => showPopup(popupParams)}
                    />,
                  <EditOutlined
                    key="edit"
                    onClick={() => navigate('/edit', { state: { target } })}
                    />,
                  <PoweroffOutlined
                    key="poweroff"
                    style={{ color: 'red' }}
                    onClick={() => showPopup(popupParams)}
                    />, //remake
                ]}
                >
                <Skeleton loading={false} avatar active>
                  <Meta
                    title={target.name}
                    description={
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography.Text>Последний раз онлайн:</Typography.Text>
                        {target.lastonline}
                        <Typography.Text>Ограничение времени:</Typography.Text>
                        {target.hourlimit}ч {target.minutelimit}мин
                        <Typography.Text>Дни недели:</Typography.Text>
                        {target.daytable}
                        </div>
                    }
                  />
                </Skeleton>
            </Card>
        </>
    );
};

export const TargetCards: React.FC<{ targets: Target[] }> = ({ targets }) => (
<>
<Space size="middle" direction="vertical" style={{ width: '100%', display: 'flex' }}>
    {targets.map((target) => (
      <TargetCard key={target.id} target={target} />
    ))}
</Space>
</>
);

const optionsCheckbox = [
    { label: 'Понедельник', value: 'Пн' },
    { label: 'Вторник', value: 'Вт' },
    { label: 'Среда', value: 'Ср' },
    { label: 'Четверг', value: 'Чт' },
    { label: 'Пятница', value: 'Пт' },
    { label: 'Суббота', value: 'Сб' },
    { label: 'Воскресенье', value: 'Вс' },
];

export const TargetForm: React.FC<{ target?: Target } > = ({ target }) => {
  const [form] = Form.useForm();

  const [hour, setHour] = useState<number>(target?.hourlimit || 0);
  const [minute, setMinute] = useState<number>(target?.minutelimit || 0);
  const [isSelectDisabled, setIsSelectDisabled] = useState<boolean>(false);

  useEffect(() => {
    setIsSelectDisabled(hour === 0 && minute === 0);
  }, [hour, minute]);

  const hourChange = (value: number | null) => {
    setHour(value || 0);
  };

  const minuteChange = (value: number | null) => {
    setMinute(value || 0);
  };

  const onFinish = (values: any) => console.log(values);

  return (
 !target ?
    <Form
      form={form}
      onFinish={onFinish}>
        <Form.Item
          name="id"
          label="Идентификатор"
          rules={[{ required: true, message: 'Пожалуйста, введите идентификатор!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Имя" // rules how to make rules??
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите имя!',
            },
          ]
          }
        >
            <Input />
        </Form.Item>
        <Form.Item
          label="Ограничение времени"
          name="hourlimit">
            <InputNumber placeholder="Часов" min={0} max={23} maxLength={2} onChange={hourChange} />
        </Form.Item>
        <Form.Item
          name="minutelimit">
          <InputNumber placeholder="Минут" min={0} max={60} maxLength={2} onChange={minuteChange} />
        </Form.Item>
        <Form.Item
          label="Дни недели"
          name="daytable">
            <Select
              mode="multiple"
              options={optionsCheckbox}
              disabled={isSelectDisabled} />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Сохранить</Button>
        </Form.Item>
    </Form>
    :
    <Form
      form={form}
      initialValues={
        {
          name: target.name,
          hourlimit: target.hourlimit,
          minutelimit: target.minutelimit,
          daytable: target.daytable,
        }
      }
      onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Имя" // rules how to make rules??
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите имя!',
            },
          ]
          }
        >
            <Input />
        </Form.Item>
        <Form.Item
          label="Ограничение времени"
          name="hourlimit">
            <InputNumber placeholder="Часов" min={0} max={23} maxLength={2} onChange={hourChange} />
        </Form.Item>
        <Form.Item
          name="minutelimit">
          <InputNumber placeholder="Минут" min={0} max={60} maxLength={2} onChange={minuteChange} />
        </Form.Item>
        <Form.Item
          label="Дни недели"
          name="daytable">
            <Select
              mode="multiple"
              options={optionsCheckbox}
              disabled={isSelectDisabled} />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Сохранить</Button>
        </Form.Item>
    </Form>
);
};
