import { EditOutlined, PoweroffOutlined, DeleteOutlined } from '@ant-design/icons';
import { useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { Card, Skeleton, Space, Typography, Form, Input, Checkbox, Button, TimePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
//import styles from './target.module.scss';

export interface Target {
  name: string;
  lastonline: string;
  timetable: string[];
  timelimit: string;
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
                        {target.timelimit}
                        <Typography.Text>Дни недели:</Typography.Text>
                        {target.timetable}
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

const optionsCheckbox = () => [
    { label: 'Понедельник', value: 'Пн' },
    { label: 'Вторник', value: 'Вт' },
    { label: 'Среда', value: 'Ср' },
    { label: 'Четверг', value: 'Чт' },
    { label: 'Пятница', value: 'Пт' },
    { label: 'Суббота', value: 'Сб' },
    { label: 'Воскресенье', value: 'Вс' },
];

export const TargetForm: React.FC<{ target?: Target } > = ({ target }) => (
 !target ?
    <Form>
        <Form.Item
          label="Идентификатор"
          rules={[{ required: true, message: 'Пожалуйста, введите идентификатор!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Сохранить</Button>
        </Form.Item>
    </Form>
    :
    <Form>
        <Form.Item
          label="Имя"
          rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
        >
            <Input defaultValue={target.name} />
        </Form.Item>
        <Form.Item label="Ограничение времени">
            <TimePicker format="HH:mm" defaultValue={dayjs(target.timelimit, 'HH:mm')} />
        </Form.Item>
        <Form.Item label="Дни недели">
            <Checkbox.Group
              options={optionsCheckbox()}
              defaultValue={target.timetable}
            >
            </Checkbox.Group>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Сохранить</Button>
        </Form.Item>
    </Form>
);
