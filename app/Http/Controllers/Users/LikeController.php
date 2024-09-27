<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\LikeModel;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'berita_id' => 'required|integer',
            'is_like' => 'required|boolean',
        ]);

        // LikeModel::updateOrCreate(
        //     ['berita_id' => $request->berita_id, 'user_id' => auth()->id()],
        //     ['is_like' => $request->is_like]
        // );

        return redirect()->back();
    }
}
