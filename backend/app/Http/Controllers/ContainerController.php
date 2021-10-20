<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContainerRequest;
use App\Models\Container;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContainerController extends Controller
{
    public function index()
    {
        try {
            return response()->json(['containers' => Container::all()]);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Ops, ocorreu algum erro!']);
        }
    }

    public function store(ContainerRequest $request)
    {
        try {
            DB::beginTransaction();
            Container::create($request->all());
            DB::commit();

            return response()->json(['success' => 'Cadastrado com sucesso!']);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['error' => 'Ops, ocorreu algum erro!']);
        }
    }

    public function edit(Container $container)
    {
        return response()->json(['container' => $container]);
    }

    public function update(ContainerRequest $request, Container $container)
    {
        try {
            DB::beginTransaction();
            $container->update($request->all());
            DB::commit();

            return response()->json(['success' => 'Atualizado com sucesso!']);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['error' => 'Ops, ocorreu algum erro!']);
        }
    }

    public function destroy(Container $container)
    {
        $container->delete();
        return response()->json(['success' => 'Excluido com sucesso!']);
    }
}
