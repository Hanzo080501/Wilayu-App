<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailBeritaController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Detailberita');
    }
}
