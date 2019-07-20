<template>
    <p>test</p>
</template>

<script>
import { Tensor, InferenceSession } from "onnxjs";
import ExampleProject from  "./ExampleProject"

export default {
    components: {
        ExampleProject
    },
    data() {
        return {

        }
    },
    created() {
        this.loadOnnx()
        /*
        let ckeditor = document.createElement('script');    
        ckeditor.setAttribute('src',"https://cdn.jsdelivr.net/npm/onnxjs/dist/onnx.min.js");
        document.head.appendChild(ckeditor);
      
        // create a session
        const myOnnxSession = new onnx.InferenceSession();
        // load the ONNX model file
        myOnnxSession.loadModel("../models/mobilenetv2-1.0.onnx").then(() => {
            // generate model input
            const inferenceInputs = getInputs();
            // execute the model
            session.run(inferenceInputs).then(output => {
            // consume the output
            const outputTensor = output.values().next().value;
            console.log(`model output tensor: ${outputTensor.data}.`);
            });
        });
        */
    },
    methods: {
        async loadOnnx(){

            const session = new InferenceSession();
            const url = "./mobilenetv2-1.0.onnx";
            await session.loadModel(url);
            const inputs = [
                new Tensor(float[1, 3, 224, 224])
            ];
            const outputMap = await session.run(inputs);
            const outputTensor = outputMap.values().next().value;

        }
    }
}
</script>

