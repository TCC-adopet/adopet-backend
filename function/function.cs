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

    }
}
