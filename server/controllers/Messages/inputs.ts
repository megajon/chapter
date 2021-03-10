import { MaxLength } from 'class-validator';
import { IsListEmpty } from './validators/isListEmpty';
import { ValidateEmailList } from './validators/validateEmailList';
import { FindDuplicateEmails } from './validators/findDuplicateEmails';
import { InputType, Field } from 'type-graphql';

// @TODO create custom validator to verify all emails belong to registered users
// @TODO create custom validator to verify user sending email is authenticated

@InputType()
export class SendEmailInputs {
  @Field(() => [String])
  @IsListEmpty({ message: 'email list cannot be empty' })
  @ValidateEmailList({ message: 'list contains invalid email' })
  @FindDuplicateEmails({
    message: 'list contains one or more duplicate emails',
  })
  to: [];

  @Field()
  @MaxLength(10)
  subject: string;

  @Field()
  html: string;
}