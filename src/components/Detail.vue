<template>
    <div>
        
        <h4>상세페이지</h4>
        <h5>{{blogList[$route.params.id].title}}</h5>
        <p>{{blogList[$route.params.id].content}}</p>
    </div>


</template>

<script>
export default {
    props : {
        blogList :Array,
    }

}
</script>

<style>

</style>