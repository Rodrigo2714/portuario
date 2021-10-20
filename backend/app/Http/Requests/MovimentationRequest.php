<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovimentationRequest extends FormRequest
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
            'container_id' => 'required',
            'type' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'container_id.required' => 'Conteiner requerido!',
            'type.required' => 'Tipo requerido!',
            'date_start.required' => 'Data Inicial requerido!',
            'date_end.required' => 'Data Final requerido!',
        ];
    }
}
