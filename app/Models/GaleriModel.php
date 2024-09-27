<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GaleriModel extends Model
{
    use HasFactory;

    protected $table = 'galeri';

    protected $fillable = [
        'id',
        'title',
        'image',
    ];
}
