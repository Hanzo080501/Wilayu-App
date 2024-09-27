<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LikeModel extends Model
{
    use HasFactory;

    protected $table = 'like_models';

    protected $fillable = [
        'user_id',
        'berita_id',
        'like',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function berita()
    {
        return $this->belongsTo(BeritaModel::class, 'berita_id');
    }
}
