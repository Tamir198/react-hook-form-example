####  Github :

https://github.com/react-hook-form/react-hook-form/issues

#### docs : 

https://www.react-hook-form.com/


#### Form builder:

https://react-hook-form.com/form-builder

### Integrating with UI libraries (mui)
https://react-hook-form.com/get-started#IntegratingwithUIlibraries

----
## Usage: 

### Register fields: 
 
"One of the key concepts in React Hook Form is to register your component into the hook. <br>
This will make its value available for both the form validation and submission."

```js
      <input
        type="number"
        placeholder="Optional field"
        {...register("optionalField", {
          required: "This field is required",
          min: { value: 40, message: "Value must be at least 40" },
          max: { value: 50, message: "Value cannot exceed 50" },
        })}
      />
```

An example can be found inside `SimpleForm.tsx` file

### Custom validation function 

List of validation rules supported:
`required,
min,
max,
minLength,
maxLength,
pattern,
validate`

**For custom validation function**: 

Go to `formWithCutomValidation.tsx`.<br>
you will see custom functions named `validateFirstName` `validateOptionalField` `validateTaField`

```js
     <input
        type="number"
        placeholder="Optional field"
        {...register("optionalField", {
          validate: validateOptionalField,
        })}
      />
```

Validation dates : 

Inside `FormWithDate` there is an example of how to validate dates (hint - use custom validation like before)  
```js
   <input
        type="text"
        placeholder="Birth Date (YYYY-MM-DD)"
        {...register("birthDate", {
          validate: validateBirthDate,
        })}
      />
```
