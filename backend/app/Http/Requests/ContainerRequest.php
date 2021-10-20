<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContainerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'client' => 'required',
            'number' => 'required|regex:/[A-Z]{4}(.*)[0-9]{7}/',
            'type' => 'required',
            'status' => 'required',
            'category' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'client.required' => 'Cliente requerido!',
            'number.required' => 'Número requerido!',
            'type.required' => 'Tipo requerido!',
            'status.required' => 'Status requerido!',
            'category.required' => 'Categoria requerido!',
        ];
    }
}
