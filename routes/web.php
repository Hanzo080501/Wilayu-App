<?php

use App\Http\Controllers\Admin\BeritaController as AdminBeritaController;
use App\Http\Controllers\Admin\GaleryController;
use App\Http\Controllers\Admin\PamongController;
use App\Http\Controllers\Admin\PotensiController;
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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Admin/Dashboard'))->middleware(['auth', 'verified'])->name('dashboard');
    Route::resource('/galery', GaleryController::class);
    Route::resource('/articles', AdminBeritaController::class);
    Route::resource('/potensi', PotensiController::class);
    Route::resource('/pamong', PamongController::class);
});




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
