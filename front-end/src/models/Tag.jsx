import Joi from 'joi'

const SomeEnumType = { TypeA: 'O', TypeB: 'C' };

const Tag = Joi.object({
    description: Joi.string()
       .min(2)
       .max(30)
       .required()
       .messages({'*': 'A descrição é obrigatória (entre 2 e 30 caracteres)'}),

       color: Joi.string()
       .min(2)
       .max(30)
       .required()
       .messages({'*': 'A cor é obrigatória (entre 2 e 30 caracteres)'}),

       type: Joi.enum()
       .valid(...Object.values(SomeEnumType))
       .required()
       .messages({'*': 'O tipo é obrigatório (entre 0 e 30 caracteres)'}),

})

//permite campos não validados, como id, createdAt e updatedAt
.options({allowUnknown: true})

export default Tag 