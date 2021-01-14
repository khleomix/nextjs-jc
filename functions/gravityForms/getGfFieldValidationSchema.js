import getGfFieldId from '@/functions/gravityForms/getGfFieldId'
import StringSchemaFactory from '@/functions/gravityForms/yupSchema/StringSchemaFactory'
import ArraySchemaFactory from '@/functions/gravityForms/yupSchema/ArraySchemaFactory'

/**
 * Match field type with Yup schema object.
 *
 * Match GravityForm field to Yup API property.
 *
 * @author WebDevStudios
 * @see https://github.com/jquense/yup#api
 * @param {object} fieldData GravityForm field props.
 * @return {object}          Schema validation for field.
 */
function getValidationSchemaByType(fieldData) {
  let schemaGetter = null

  switch (fieldData?.type) {
    case 'checkbox':
      schemaGetter = new ArraySchemaFactory(fieldData).schema
      break

    case 'email':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    case 'phone':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    case 'text':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    case 'website':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    default:
      return
  }

  return schemaGetter
}

/**
 * Map props to validation schemas.
 *
 * @author WebDevStudios
 * @param {object} fieldData GravityForm field props.
 * @return {object}          Schema validation for field.
 */
export default function getGfFieldValidationSchema(fieldData) {
  return {
    [getGfFieldId(fieldData.id)]: getValidationSchemaByType(fieldData)
  }
}
