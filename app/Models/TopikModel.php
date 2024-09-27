<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TopikModel extends Model
{
    use HasFactory;

    protected $table = 'topik';

    protected $fillable = [
        'title',
        'berita_id',
        'created_at',
        'updated_at',
    ];

    public function berita()
    {
        return $this->belongsTo(BeritaModel::class, 'berita_id', 'id');
    }
}
