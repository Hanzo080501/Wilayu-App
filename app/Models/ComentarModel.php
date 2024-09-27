<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComenterModel extends Model
{
    use HasFactory;

    protected $table = 'comenter';

    protected $fillable = [
        'berita_id',
        'user_id',
        'komentar',
    ];

    public function berita()
    {
        return $this->belongsTo(BeritaModel::class, 'berita_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
