import { ChangeEvent } from 'react';
import { Chat } from '../../../types/interfaces';

export interface ChatFullBlockProps {
  value: string;
  dialog: Chat;
  handleSendClick: () => void;
  handleMessageInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
