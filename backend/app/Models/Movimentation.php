<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movimentation extends Model
{
    protected $table = 'movimentations';
    protected $primaryKey = 'id';

    protected $fillable   = [
        'container_id',
        'type',
        'data_start',
        'date_end'
    ];

    public function container()
    {
        $this->belongsTo(Container::class, 'container_id');
    }
}
