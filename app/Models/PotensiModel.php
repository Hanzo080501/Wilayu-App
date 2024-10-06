<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PotensiModel extends Model
{
    use HasFactory;

    protected $table = 'potensi';

    protected $fillable = [
        'title',
        'description',
        'image',
        'created_at',
        'updated_at',
    ];
}
