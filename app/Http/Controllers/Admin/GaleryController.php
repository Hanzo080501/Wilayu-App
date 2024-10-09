<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\GaleryRequest;
use App\Http\Requests\Admin\GaleryUpdateRequest;
use App\Models\GaleriModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GaleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galery = GaleriModel::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Admin/Gallery/Index', [
            'galery' => $galery
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Gallery/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GaleryRequest $request)
    {
        $validated = $request->validated();

        // dd($validated);

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $fileName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/galeryAdmin', $fileName);
            $validated['image'] = $fileName;
            $validated['file_size'] = $image->getSize();
        } else {

            $validated['image'] = null;
        }

        GaleriModel::create($validated);

        return redirect()->route('galery.index')->with('success', 'Data Berhasil');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GaleriModel $galeriModel, string $id)
    {

        return Inertia::render('Admin/Gallery/Edit', [
            'galery' => $galeriModel::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GaleryUpdateRequest $request, GaleriModel $galeriModel)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $oldImage = $galeriModel->image;
            Storage::delete('public/galeryAdmin/' . $oldImage);
            $image = $request->file('image');
            $fileName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/galeryAdmin', $fileName);
            $validated['image'] = $fileName;
            $validated['file_size'] = $image->getSize();
        } else {

            $validated['image'] = null;
        }

        $galeriModel->update($validated);

        return redirect()->route('galery.index')->with('success', 'Data Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
