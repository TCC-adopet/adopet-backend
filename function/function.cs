namespace AdopetMeApi.function {
    public static class Validation{
               public static bool IsValid(string propriedade)
        {
            if(propriedade!=null){
                return true;
            }
            else{
                return false;
            }
        }
        public static bool isValidDate(DateTime? propriedade){
            if(propriedade!=null){
                return true;
            }
            else{
                return false;
            }
        }
        public static bool isValidImage(IFormFile? propriedade){
            if(propriedade!=null){
                return true;
            }
            else{
                return false;
            }
        }
        public static bool IsValidClass<T>(T propriedade){
            if(propriedade!=null){
                return true;
            }
            else{
                return false;
            }
        }
       public static T SalvarNoBanco<T>(T entity, object dto)
        {
            var dtoProperties = dto.GetType().GetProperties(); // Obtém as propriedades do objeto dto
            var entityProperties = typeof(T).GetProperties(); // Obtém as propriedades do tipo de objeto entity

            foreach (var dtoProperty in dtoProperties) // Itera pelas propriedades do dto
            {
                var entityProperty = entityProperties.FirstOrDefault(p => p.Name == dtoProperty.Name);

                if (entityProperty != null && entityProperty.PropertyType == dtoProperty.PropertyType)
                {
                    // Se a propriedade correspondente existir no objeto entity e tiver o mesmo tipo que a propriedade do dto,
                    // o valor da propriedade do dto é copiado para a propriedade do entity
                    entityProperty.SetValue(entity, dtoProperty.GetValue(dto));
                }
            }

            return entity; // Retorna o objeto entity com as propriedades do dto copiadas
        }
        public static T updateEntityBd<T>(T entity, object dto)
        {
            var dto_Properties = dto.GetType().GetProperties();
            var entity_Properties = typeof(T).GetProperties();

            if(dto!=null){
                foreach(var dto_Property in dto_Properties)
                {
                var entity_Property = entity_Properties.FirstOrDefault(p => p.Name == dto_Property);
                if(dto_Property != null && entity_Property.PropertyType == dtoProperty.PropertyType)
                {
                    entity_Property.SetValue(entity,dto_Property.GetValue(dto));
                }
                }
            }
            return entity;
        }

    }
}
