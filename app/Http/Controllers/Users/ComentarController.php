<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\ComenterModel;
use Illuminate\Http\Request;

class ComentarController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'komentar' => 'required|string',
            'berita_id' => 'required|integer',
        ]);

        // ComenterModel::create([
        //     'berita_id' => $request->berita_id,
        //     'user_id' => auth()->check() ? auth()->id() : null,  // Pastikan user sudah login
        //     'komentar' => $request->komentar,
        // ]);

        return redirect()->back();
    }
}
