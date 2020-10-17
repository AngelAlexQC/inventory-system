<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;
    protected $fillable = [
        'cedula',
        'nombre',
        'productos'
    ];

    protected $casts = [
        'productos' => 'json'
    ];

    public function getProductosAttribute($value)
    {
        return json_decode($value);
    }
}
