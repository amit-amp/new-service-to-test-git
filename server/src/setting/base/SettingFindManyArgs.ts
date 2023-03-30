/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SettingWhereInput } from "./SettingWhereInput";
import { Type } from "class-transformer";
import { SettingOrderByInput } from "./SettingOrderByInput";

@ArgsType()
class SettingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SettingWhereInput,
  })
  @Field(() => SettingWhereInput, { nullable: true })
  @Type(() => SettingWhereInput)
  where?: SettingWhereInput;

  @ApiProperty({
    required: false,
    type: [SettingOrderByInput],
  })
  @Field(() => [SettingOrderByInput], { nullable: true })
  @Type(() => SettingOrderByInput)
  orderBy?: Array<SettingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SettingFindManyArgs as SettingFindManyArgs };
