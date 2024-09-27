<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BreackingnewsModel extends Model
{
    use HasFactory;

    protected $table = 'breackingnews';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'title', 'berita_id', 'created_at', 'updated_at'];

    public function berita()
    {
        return $this->belongsTo(BeritaModel::class, 'berita_id', 'id');
    }
}
