namespace AdopetMeApi.function {
    public static class Validation{
       public static T SalvarNoBanco<T>(T entity, object dto)
        {
            var dtoProperties = dto.GetType().GetProperties(); // Obtém as propriedades do objeto dto
            var entityProperties = typeof(T).GetProperties(); // Obtém as propriedades do tipo de objeto entity

            foreach (var dtoProperty in dtoProperties) //cria uma variavel Property, para passar em cada propriedade do object dto
            {
                var entityProperty = entityProperties.FirstOrDefault(p => p.Name == dtoProperty.Name);// procura no entity uma propriedade com o mesmo nome da propriedade do dto

                if (entityProperty != null && entityProperty.PropertyType == dtoProperty.PropertyType)
                {
                    // Se a propriedade correspondente existir no objeto entity e tiver o mesmo tipo que a propriedade do dto, o valor da propriedade do dto é copiado para a propriedade do entity
                    entityProperty.SetValue(entity, dtoProperty.GetValue(dto));
                }
            }

            return entity; // Retorna o objeto entity com as propriedades do dto copiadas
        }
        public static T updateEntityBd<T>(T entity, object dto)
        {
            var dto_Properties = dto.GetType().GetProperties();
            var entity_Properties = typeof(T).GetProperties();
            if(dto!=null){//se o dto não for null contiuará o processo
                foreach(var dto_Property in dto_Properties)
                {
                var entity_Property = entity_Properties.FirstOrDefault(p => p.Name == dto_Property.Name); 
                if(dto_Property != null && entity_Property != null && entity_Property.PropertyType == dto_Property.PropertyType)//se propriedade do dto e a propriedade do entity não forem null e tiverem o mesmo tipo, salva no banco
                {
                    entity_Property.SetValue(entity,dto_Property.GetValue(dto));
                }
                }
            }
            return entity;//retorna o entity
        }
        public static object PegarPropriedades<T>(T entity, object dto)
        {
            var ret = Activator.CreateInstance(typeof(T));//criando uma classe de destino para colocar as propriedades que não forem null
            var dto_Properties = dto.GetType().GetProperties();
            var entity_Properties = typeof(T).GetProperties();

            if(dto!=null){
                foreach(var dto_Property in dto_Properties)
                {
                var entity_Property = entity_Properties.FirstOrDefault(p => p.Name == dto_Property.Name);
                if(dto_Property != null &&entity_Property != null && entity_Property.PropertyType == dto_Property.PropertyType)
                {
                    var dto_Value = dto_Property.GetValue(dto);//cria uma variavel para pegar o valor da propriedade atual do foreach
                    if(dto_Value != null)//se valor não for null, da um SetValue na variavel ret, que significa retorno/return
                    {
                    entity_Property.SetValue(ret,dto_Value);
                    }
                }
                }
            }
            return ret;
        }
    }
}