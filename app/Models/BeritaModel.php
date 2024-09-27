<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BeritaModel extends Model
{
    use HasFactory;

    protected $table = 'berita';

    protected $fillable = [
        'title',
        'description',
        'image',
        'status',
        'created_at',
        'updated_at',
    ];

    public function topik()
    {
        return $this->hasMany(TopikModel::class, 'topik_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function breackingnews()
    {
        return $this->hasMany(BreackingnewsModel::class, 'berita_id', 'id');
    }
}
