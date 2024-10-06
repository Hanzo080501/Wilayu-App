<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PamongModel extends Model
{
    use HasFactory;

    protected $table = 'pamong';

    protected $fillable = [
        'name',
        'jabatan',
        'email',
        'notelp',
        'gambar',
    ];
}
