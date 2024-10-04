<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Users\AboutController;
use App\Http\Controllers\Users\BeritaController;
use App\Http\Controllers\Users\DetailBeritaController;
use App\Http\Controllers\Users\GaleriController;
use App\Http\Controllers\Users\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/', [HomeController::class, 'index'])->name('/');
Route::get('/galeri', [GaleriController::class, 'index'])->name('galeri');
Route::get('/about', [AboutController::class, 'index']);
Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/detailberita', [DetailBeritaController::class, 'index'])->name('detailberita');
Route::get('/peta', function () {
    return Inertia::render('Users/Peta');
})->middleware(['auth', 'verified']);
Route::get('/sejarah', function () {
    return Inertia::render('Users/Sejarah');
})->name('/sejarah');
// Route::get('/layanan', function () {
//     return  Inertia::render('Users/Layanan');
// });
Route::get('/pemerintahan', fn() => Inertia::render('Users/Pemerintahan'));
Route::get('/peta', fn() => Inertia::render('Users/Peta'));
Route::get('/layanan', fn() => Inertia::render('Users/Layanan'));
Route::get('/potensi', fn() => Inertia::render('Users/PotensiPadukuhan'));
Route::get('/kontak', fn() => Inertia::render('Users/Kontak'));


Route::get('/dashboard', fn() => Inertia::render('Admin/Dashboard'))->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/galeri', fn() => Inertia::render('Admin/Gallery/Index'))->middleware(['auth', 'verified'])->name('galeri.dashboard');
Route::get('/galeri/create', fn() => Inertia::render('Admin/Gallery/Create'))->middleware(['auth', 'verified'])->name('galeri.create');
Route::get('/galeri/edit', fn() => Inertia::render('Admin/Gallery/Edit'))->middleware(['auth', 'verified'])->name('galeri.edit');
Route::get('/articles', fn() => Inertia::render('Admin/Articles/Index'))->middleware(['auth', 'verified'])->name('articles.dashboard');
Route::get('/articles/create', fn() => Inertia::render('Admin/Articles/Create'))->middleware(['auth', 'verified'])->name('articles.create');
Route::get('/articles/edit', fn() => Inertia::render('Admin/Articles/Edit'))->middleware(['auth', 'verified'])->name('articles.edit');
Route::get('/potensi', fn() => Inertia::render('Admin/Potensi/Index'))->middleware(['auth', 'verified'])->name('potensi.dashboard');
Route::get('/potensi/create', fn() => Inertia::render('Admin/Potensi/Create'))->middleware(['auth', 'verified'])->name('potensi.create');
Route::get('/potensi/edit', fn() => Inertia::render('Admin/Potensi/Edit'))->middleware(['auth', 'verified'])->name('potensi.edit');
Route::get('/potensi/detail', fn() => Inertia::render('Admin/Potensi/Detail'))->middleware(['auth', 'verified'])->name('potensi.detail');
Route::get('/pamong', fn() => Inertia::render('Admin/Pamong/Index'))->middleware(['auth', 'verified'])->name('pamong.dashboard');
Route::get('/pamong/create', fn() => Inertia::render('Admin/Pamong/Create'))->middleware(['auth', 'verified'])->name('pamong.create');
Route::get('/pamong/edit', fn() => Inertia::render('Admin/Pamong/Edit'))->middleware(['auth', 'verified'])->name('pamong.edit');
Route::get('/pamong/detail', fn() => Inertia::render('Admin/Pamong/Detail'))->middleware(['auth', 'verified'])->name('pamong.detail');




// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
//     // return Inertia::render('Admin/Home');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
