<?php

use App\Models\Product;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('nombre');
            $table->string('descripcion')->nullable();
            $table->float('precio', 6, 2);
            $table->float('costo', 6, 2);
            $table->unsignedInteger('stock');
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories');
        });

        Product::create(
            [
                'category_id' => 1,
                'nombre' => 'Cloro en Sachet para el COVID',
                'descripcion' => 'Este cloro sirve para que desinfectes tus manos',
                'precio' => 1.5,
                'costo' => 0.75,
                'stock' => 100,
            ]
        );
        Product::create(
            [
                'category_id' => 1,
                'nombre' => 'Jabon Blu Yinero',
                'descripcion' => 'Lava tu ropa con el amor de mamá',
                'precio' => 1.5,
                'costo' => 0.75,
                'stock' => 100,
            ]
        );
        Product::create(
            [
                'category_id' => 2,
                'nombre' => 'Audífonos Gamer',
                'descripcion' => 'Audífonos Chinos con luces LED para parecer Gamer',
                'precio' => 25,
                'costo' => 4,
                'stock' => 50,
            ]
        );

        Product::create(
            [
                'category_id' => 2,
                'nombre' => 'Cargador para iPhone',
                'descripcion' => 'Cargador que cuida el medio ambiente',
                'precio' => 85,
                'costo' => 35,
                'stock' => 80,
            ]
        );

        Product::create(
            [
                'category_id' => 2,
                'nombre' => 'Xiaomi Redmi Note 8 Pro',
                'descripcion' => 'El mejor teléfono con relación calidad/precio mejor que un iPhone',
                'precio' => 350,
                'costo' => 275,
                'stock' => 20,
            ]
        );

        Product::create(
            [
                'category_id' => 3,
                'nombre' => 'Quintal de Arroz',
                'descripcion' => 'Quintal de Arroz tipo Flor',
                'precio' => 15,
                'costo' => 8,
                'stock' => 100,
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
