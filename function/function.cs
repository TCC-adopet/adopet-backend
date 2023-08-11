namespace AdopetMeApi.function {
    public static class validation{
        public static bool isValid(string propriedade)
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
        public static T SalvarNoBanco<T>(T entity,object dto){
            var dtoProperties = dto.GetType().GetProperties();
            var entityProperties = typeof(T).GetProperties();

            foreach (var dtoProperty in dtoProperties)
            {
                var entityProperty = entityProperties.FirstOrDefault(p => p.Name == dtoProperty.Name);

                if (entityProperty != null && entityProperty.PropertyType == dtoProperty.PropertyType)
                {
                    entityProperty.SetValue(entity, dtoProperty.GetValue(dto));
                }
            }

            return entity;
        }
    }
}
