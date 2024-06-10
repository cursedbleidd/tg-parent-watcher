import React from 'react';
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';
import moment from 'moment';

const nothing = (values: any) => values;

export const BankCardForm : React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    nothing(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="bank_card_form"
      onFinish={onFinish}
    >
      <Form.Item
        name="cardNumber"
        label="Номер карты"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите номер карты!',
          },
          {
            pattern: /^[0-9]{16}$/,
            message: 'Номер карты должен быть 16-ти значным!',
          },
        ]}
      >
        <Input placeholder="1234 5678 9012 3456" maxLength={16} />
      </Form.Item>

      <Form.Item
        name="cardHolder"
        label="Имя владелеца карты"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите имя владелеца карты!',
          },
        ]}
      >
        <Input placeholder="Иванов Иван" />
      </Form.Item>
          <Form.Item
            name="cvv"
            label="CVV"
            rules={[
              {
                required: true,
                message: 'Please input your CVV!',
              },
              {
                pattern: /^[0-9]{3,4}$/,
                message: 'CVV must be 3 or 4 digits!',
              },
            ]}
          >
            <InputNumber
              placeholder="123"
              maxLength={3}
            />
          </Form.Item>
          <Form.Item
            name="expiryDate"
            label="Дата истечения"
            rules={[
              {
                required: true,
                message: 'Please select the expiry date!',
              },
              {
                validator(_, value) {
                  if (value && value.isAfter(moment())) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Expiry date must be in the future!'));
                },
              },
            ]}
          >
            <DatePicker
              picker="month"
              format="MM/YY"
              placeholder="ММ/ГГ"
            />
          </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Оплатить
        </Button>
      </Form.Item>
    </Form>
  );
};
