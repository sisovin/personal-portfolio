import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { isEmail, isStrongPassword, isValidUsername, isNonEmptyString, isValidDate } from 'packages/shared/src/utils/validation';

@ValidatorConstraint({ async: false })
export class IsEmailConstraint implements ValidatorConstraintInterface {
  validate(email: any, args: ValidationArguments) {
    return isEmail(email);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email is not valid';
  }
}

export function IsEmail(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailConstraint,
    });
  };
}

@ValidatorConstraint({ async: false })
export class IsStrongPasswordConstraint implements ValidatorConstraintInterface {
  validate(password: any, args: ValidationArguments) {
    return isStrongPassword(password);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Password is not strong enough';
  }
}

export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsStrongPasswordConstraint,
    });
  };
}

@ValidatorConstraint({ async: false })
export class IsValidUsernameConstraint implements ValidatorConstraintInterface {
  validate(username: any, args: ValidationArguments) {
    return isValidUsername(username);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Username is not valid';
  }
}

export function IsValidUsername(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidUsernameConstraint,
    });
  };
}

@ValidatorConstraint({ async: false })
export class IsNonEmptyStringConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return isNonEmptyString(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Value should not be empty';
  }
}

export function IsNonEmptyString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNonEmptyStringConstraint,
    });
  };
}

@ValidatorConstraint({ async: false })
export class IsValidDateConstraint implements ValidatorConstraintInterface {
  validate(date: any, args: ValidationArguments) {
    return isValidDate(date);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Date is not valid';
  }
}

export function IsValidDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidDateConstraint,
    });
  };
}
