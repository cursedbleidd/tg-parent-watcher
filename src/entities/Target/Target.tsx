import { EditOutlined, PoweroffOutlined, DeleteOutlined } from '@ant-design/icons';
import { useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { Card, Skeleton, Space, Typography, Form, Input, Button, Select, InputNumber } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteTarget } from './api/useDeleteTarget';
import { useUpdateTarget } from './api/useUpdateDevice';
import { Target } from './ITarget';
//import styles from './target.module.scss';

const { Meta } = Card;

const popupParams = {
    message: 'Вы уверены?',
    buttons: [
        {
            id: '1',
            type: 'ok',
            onclick: () => undefined,
        },
        {
            id: '2',
            type: 'cancel',
        },
    ],
};

const popupParamsDel = {
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
    const [displaySet, setDisplay] = useState<string>('');
    const navigate = useNavigate();
    const deleteTarget = useDeleteTarget();
    return (
        <>
            <Card
              style={{ width: '100%', display: displaySet }}
              actions={[
                  <DeleteOutlined
                    key="delete"
                    onClick={async () => {
                      const answer = await showPopup(popupParamsDel);
                      if (answer === '1') {
                        if (await deleteTarget(target.id) === 200) {
                          setDisplay('none');
                        }
                      }
                    }
                    }
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
                        {target.lastOnline}
                        <Typography.Text>Ограничение времени:</Typography.Text>
                        {target.hourLimit}ч {target.minuteLimit}мин
                        <Typography.Text>Дни недели:</Typography.Text>
                        {target.daysOfWeek}
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
  const navigate = useNavigate();
  const update = useUpdateTarget();
  const [hour, setHour] = useState<number>(target?.hourLimit || 0);
  const [minute, setMinute] = useState<number>(target?.minuteLimit || 0);
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

  const onFinish = async (values: any) => {
    const value = {
      id: values.id,
      lastOnline: values.lastOnline,
      name: values.name,
      hourLimit: (values.hourLimit) ? values.hourLimit : undefined,
      minuteLimit: (values.minuteLimit) ? values.minuteLimit : undefined,
      daysOfWeek: (values.daysOfWeek) ? values.daysOfWeek.join(' ') : undefined,
    } as Target;
    if (await update(value) === 200) {
    navigate('/targets', { replace: true });
    }
  };

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
          name="lastOnline"
          label="lastonline"
          style={{ display: 'none' }}
        >
            <Input />
        </Form.Item>
        <Form.Item
          label="Ограничение времени"
          name="hourLimit">
            <InputNumber placeholder="Часов" min={0} max={23} maxLength={2} onChange={hourChange} />
        </Form.Item>
        <Form.Item
          name="minuteLimit">
          <InputNumber placeholder="Минут" min={0} max={60} maxLength={2} onChange={minuteChange} />
        </Form.Item>
        <Form.Item
          label="Дни недели"
          name="daysOfWeek">
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
          id: target.id,
          name: target.name,
          lastOnline: target.lastOnline,
          hourLimit: target.hourLimit,
          minuteLimit: target.minuteLimit,
          daysOfWeek: (target.daysOfWeek) ? target.daysOfWeek.split(' ') : [],
        }
      }
      onFinish={onFinish}>
        <Form.Item
          name="id"
          label="Идентификатор"
          style={{ display: 'none' }}
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
          name="lastOnline"
          label="lastonline"
          style={{ display: 'none' }}
        >
            <Input />
        </Form.Item>
        <Form.Item
          label="Ограничение времени"
          name="hourLimit">
            <InputNumber placeholder="Часов" min={0} max={23} maxLength={2} onChange={hourChange} />
        </Form.Item>
        <Form.Item
          name="minuteLimit">
          <InputNumber placeholder="Минут" min={0} max={59} maxLength={2} onChange={minuteChange} />
        </Form.Item>
        <Form.Item
          label="Дни недели"
          name="daysOfWeek">
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
